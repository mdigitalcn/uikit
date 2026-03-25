import React from 'react'
import type { UploadFile, UploadProps } from './types'
import { getValidationStatus } from '../utils'
import { matchesAccept, formatFileSize, generateUID, isImageFile } from './utils'

interface UseUploadConfig {
  fileList?: UploadFile[]
  defaultFileList?: UploadFile[]
  onChange?: UploadProps['onChange']
  onRemove?: UploadProps['onRemove']
  onError?: (message: string, file: File) => void
  beforeUpload?: (file: File) => boolean | Promise<boolean>
  customRequest?: UploadProps['customRequest']
  accept?: string
  maxCount?: number
  maxSize?: number
  multiple?: boolean
  disabled?: boolean
  error?: string | boolean
  warning?: string | boolean
  info?: string | boolean
  success?: string | boolean
  helperText?: string
}

export function useUpload(config: UseUploadConfig) {
  const {
    fileList,
    defaultFileList = [],
    onChange,
    onRemove,
    onError,
    beforeUpload,
    customRequest,
    accept,
    maxCount,
    maxSize,
    multiple = false,
    disabled = false,
    error,
    warning,
    info,
    success,
    helperText,
  } = config

  const [internalFileList, setInternalFileList] = React.useState<UploadFile[]>(defaultFileList)
  const [dragActive, setDragActive] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const isMountedRef = React.useRef(true)

  React.useEffect(() => {
    isMountedRef.current = true
    return () => { isMountedRef.current = false }
  }, [])

  const currentFileList = fileList !== undefined ? fileList : internalFileList

  const { status, message: helperMessage } = getValidationStatus({
    error, warning, info, success, helperText,
  })

  const handleFiles = React.useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return

      const newFiles: UploadFile[] = []
      let acceptedSoFar = 0

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (!file) continue

        if (!matchesAccept(file, accept)) {
          onError?.(`File type not accepted`, file)
          continue
        }
        if (maxCount && currentFileList.length + acceptedSoFar >= maxCount) {
          onError?.(`Maximum ${maxCount} file${maxCount > 1 ? 's' : ''} allowed`, file)
          continue
        }
        if (maxSize && file.size > maxSize) {
          onError?.(`File size exceeds ${formatFileSize(maxSize)}`, file)
          continue
        }
        if (beforeUpload) {
          const shouldUpload = await beforeUpload(file)
          if (!shouldUpload) continue
        }

        const uploadFile: UploadFile = {
          uid: generateUID(),
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'uploading',
          percent: 0,
        }

        newFiles.push(uploadFile)
        acceptedSoFar++

        if (customRequest) {
          customRequest({
            file,
            onProgress: (percent) => {
              if (!isMountedRef.current) return
              setInternalFileList((prev) => prev.map((f) => f.uid === uploadFile.uid ? { ...f, percent } : f))
            },
            onSuccess: (response) => {
              if (!isMountedRef.current) return
              setInternalFileList((prev) => prev.map((f) => f.uid === uploadFile.uid ? { ...f, status: 'done' as const, percent: 100, response } : f))
            },
            onError: (err) => {
              if (!isMountedRef.current) return
              setInternalFileList((prev) => prev.map((f) => f.uid === uploadFile.uid ? { ...f, status: 'error' as const, error: err } : f))
            },
          })
        } else {
          if (file && isImageFile(file)) {
            uploadFile.thumbUrl = URL.createObjectURL(file)
          }
          uploadFile.status = 'done'
          uploadFile.percent = 100
        }
      }

      const updatedList = multiple ? [...currentFileList, ...newFiles] : newFiles
      if (fileList === undefined) setInternalFileList(updatedList)
      onChange?.(updatedList)
    },
    [accept, maxCount, maxSize, beforeUpload, customRequest, onError, multiple, currentFileList, fileList, onChange],
  )

  const handleRemove = React.useCallback(
    (file: UploadFile) => {
      const newList = currentFileList.filter((f) => f.uid !== file.uid)
      if (fileList === undefined) setInternalFileList(newList)
      onChange?.(newList)
      if (file.thumbUrl?.startsWith('blob:')) URL.revokeObjectURL(file.thumbUrl)
      onRemove?.(file)
    },
    [currentFileList, fileList, onRemove, onChange],
  )

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files)
      e.target.value = ''
    },
    [handleFiles],
  )

  const handleClick = React.useCallback(() => {
    if (!disabled) inputRef.current?.click()
  }, [disabled])

  const handleDragEnter = React.useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation()
    if (!disabled) setDragActive(true)
  }, [disabled])

  const handleDragLeave = React.useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation()
    setDragActive(false)
  }, [])

  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation()
  }, [])

  const handleDrop = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault(); e.stopPropagation()
      setDragActive(false)
      if (!disabled) handleFiles(e.dataTransfer.files)
    },
    [disabled, handleFiles],
  )

  return {
    currentFileList,
    dragActive,
    inputRef,
    status,
    helperMessage,
    handleFiles,
    handleInputChange,
    handleRemove,
    handleClick,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  }
}
