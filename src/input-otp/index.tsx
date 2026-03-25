'use client'

import { cva } from 'class-variance-authority'
import React from 'react'

import { cn, getValidationStatus as getStatus, statusMessageVariants } from '../utils'
import type { InputOTPProps } from './types'

const otpSlotVariants = cva(
  'inline-flex items-center justify-center border rounded-md bg-background text-text-primary font-medium text-center outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        xs: 'h-(--otp-size-xs) w-(--otp-size-xs) text-xs',
        sm: 'h-(--otp-size-sm) w-(--otp-size-sm) text-sm',
        md: 'h-(--otp-size-md) w-(--otp-size-md) text-base',
        lg: 'h-(--otp-size-lg) w-(--otp-size-lg) text-lg',
      },
      status: {
        default: 'border-border focus:border-primary',
        error: 'border-error focus:border-error',
        warning: 'border-warning focus:border-warning',
        info: 'border-info focus:border-info',
        success: 'border-success focus:border-success',
      },
    },
    defaultVariants: { size: 'md', status: 'default' },
  }
)

const InputOTP = React.memo<InputOTPProps>(
  ({
    length = 6,
    size = 'md',
    color = 'primary',    value,
    onChange,
    onComplete,
    error,
    warning,
    info,
    success,
    helperText,
    disabled = false,
    autoFocus = false,
    type = 'text',
    mask = false,
    pattern,
    label,
    messagePosition = 'bottom',
    className,
    classNames,
    ref,
  }) => {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])
    const otpRef = React.useRef<string[]>([])
    const [otp, setOtp] = React.useState<string[]>(
      value !== undefined ? value.split('').slice(0, length) : [],
    )
    otpRef.current = otp

    React.useEffect(() => {
      if (value !== undefined) {
        setOtp(value.split('').slice(0, length))
      }
    }, [value, length])

    React.useEffect(() => {
      if (autoFocus && inputRefs.current[0]) {
        inputRefs.current[0].focus()
      }
    }, [autoFocus])

    const compiledPattern = React.useMemo(() => {
      if (!pattern) return null
      try { return new RegExp(pattern) } catch { return null }
    }, [pattern])

    const handleChange = React.useCallback(
      (index: number, newValue: string) => {
        const char = newValue.slice(-1)
        if (compiledPattern && char && !compiledPattern.test(char)) return

        setOtp((prev) => {
          const newOtp = [...prev]
          newOtp[index] = char
          const otpValue = newOtp.join('')
          onChange?.(otpValue)
          if (otpValue.length === length) onComplete?.(otpValue)
          return newOtp
        })

        if (char && index < length - 1) {
          inputRefs.current[index + 1]?.focus()
        }
      },
      [length, onChange, onComplete, compiledPattern],
    )

    const handleKeyDown = React.useCallback(
      (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
          if (!otpRef.current[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
          }
        } else if (e.key === 'ArrowLeft' && index > 0) {
          inputRefs.current[index - 1]?.focus()
        } else if (e.key === 'ArrowRight' && index < length - 1) {
          inputRefs.current[index + 1]?.focus()
        }
      },
      [length],
    )

    const handlePaste = React.useCallback(
      (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').slice(0, length)
        if (compiledPattern && pattern && !new RegExp(`^${pattern}*$`).test(pastedData)) return

        setOtp((prevOtp) => {
          const newOtp = pastedData.split('').slice(0, length)
          const otpValue = newOtp.join('')
          onChange?.(otpValue)
          const focusIndex = Math.min(newOtp.length, length - 1)
          inputRefs.current[focusIndex]?.focus()
          if (prevOtp.length < length && otpValue.length === length) {
            onComplete?.(otpValue)
          }
          return newOtp
        })
      },
      [length, onChange, onComplete, compiledPattern, pattern],
    )

    const { status, message } = getStatus({ error, warning, info, success, helperText })

    return (
      <div
        ref={ref}
        data-slot="inputOTP_root"
        className={cn('inputOTP_root', 'w-full', classNames?.root, className)}
      >
        {label && (
          <label
            data-slot="inputOTP_label"
            className={cn(
              'inputOTP_label',
              'block text-sm font-medium text-text-primary mb-1.5',
              classNames?.label,
            )}
          >
            {label}
          </label>
        )}

        {messagePosition === 'top' && message && (
          <p
            data-slot="inputOTP_helper"
            className={cn('inputOTP_helper', statusMessageVariants({ status }), 'mb-1.5', classNames?.helper)}
          >
            {message}
          </p>
        )}

        <div
          data-slot="inputOTP_wrapper"
          className={cn('inputOTP_wrapper', 'flex gap-2', classNames?.wrapper)}
          role="group"
          aria-label="One-time password"
        >
          {Array.from({ length }).map((_, index) => {
            const isActive = otp[index] !== undefined && otp[index] !== ''
            return (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el }}
                type={mask ? 'password' : 'text'}
                inputMode={type === 'number' ? 'numeric' : 'text'}
                maxLength={1}
                value={otp[index] || ''}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={disabled}
                data-slot="inputOTP_slot"
                className={cn(
                  'inputOTP_slot',
                  otpSlotVariants({ size, status }),
                  'font-semibold',
                  'hover:border-primary/50',
                  'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
                  classNames?.slot,
                  isActive && classNames?.slotActive,
                )}
                aria-label={`OTP digit ${index + 1}`}
              />
            )
          })}
        </div>

        {messagePosition === 'bottom' && message && (
          <p
            data-slot="inputOTP_helper"
            className={cn('inputOTP_helper', statusMessageVariants({ status }), 'mt-1.5', classNames?.helper)}
          >
            {message}
          </p>
        )}
      </div>
    )
  },
)

InputOTP.displayName = 'InputOTP'

export type { InputOTPClassNames } from './types'
export type * from './types'
export default InputOTP
