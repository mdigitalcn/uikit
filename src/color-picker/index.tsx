'use client'

import { cva } from "class-variance-authority";
import React from "react";

import { useControllable } from "../hooks/useControllable";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "../utils";
import { colorVars } from "../variants";
import type { ColorPickerProps, ColorInputProps } from "./types";

// ── Color utilities ──────────────────────────────────────────
import { hexToHsv, hsvToHex, isValidHex, normalizeHex } from './utils'

// ── Size variants ────────────────────────────────────────────
const sizeMap = {
  xs: { area: "min-w-40 h-28", hue: "h-2", swatch: "w-4 h-4" },
  sm: { area: "min-w-48 h-32", hue: "h-2.5", swatch: "w-5 h-5" },
  md: { area: "min-w-56 h-36", hue: "h-3", swatch: "w-6 h-6" },
  lg: { area: "min-w-64 h-44", hue: "h-3.5", swatch: "w-7 h-7" },
};

const inputVariants = cva(
  "flex items-center [--_radius:var(--radius-input)] rounded-slot border border-border bg-background text-text-primary transition-colors hover:border-slot-50 focus-within:border-slot focus-within:ring-2 focus-within:ring-slot-30",
  {
    variants: {
      size: {
        xs: "h-(--input-height-xs) px-(--input-padding-x-xs) text-xs gap-1.5",
        sm: "h-(--input-height-sm) px-(--input-padding-x-sm) text-sm gap-2",
        md: "h-(--input-height-md) px-(--input-padding-x-md) text-sm gap-2",
        lg: "h-(--input-height-lg) px-(--input-padding-x-lg) text-base gap-2.5",
      },
    },
    defaultVariants: { size: "md" },
  },
);

// ── Shared drag hook ─────────────────────────────────────────
function useDrag(
  onUpdate: (clientX: number, clientY: number, rect: DOMRect) => void,
  disabled?: boolean,
) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rectRef = React.useRef<DOMRect | null>(null);
  const cbRef = React.useRef(onUpdate);
  cbRef.current = onUpdate;

  const handlePointerDown = React.useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      rectRef.current = ref.current?.getBoundingClientRect() ?? null;
      if (rectRef.current) cbRef.current(e.clientX, e.clientY, rectRef.current);
    },
    [disabled],
  );

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent) => {
      if (!(e.target as HTMLElement).hasPointerCapture(e.pointerId)) return;
      e.preventDefault();
      e.stopPropagation();
      if (rectRef.current) cbRef.current(e.clientX, e.clientY, rectRef.current);
    },
    [],
  );

  const handlePointerUp = React.useCallback(() => {
    rectRef.current = null;
  }, []);

  return { ref, handlePointerDown, handlePointerMove, handlePointerUp };
}

// ── Saturation Area ──────────────────────────────────────────
function SaturationArea({
  hue,
  sat,
  val,
  onChangeSV,
  areaClass,
  disabled,
}: {
  hue: number;
  sat: number;
  val: number;
  onChangeSV: (s: number, v: number) => void;
  areaClass: string;
  disabled?: boolean;
}) {
  const onChangeSVRef = React.useRef(onChangeSV);
  onChangeSVRef.current = onChangeSV;

  const { ref, handlePointerDown, handlePointerMove, handlePointerUp } =
    useDrag((clientX, clientY, rect) => {
      const s = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const v = Math.max(
        0,
        Math.min(1, 1 - (clientY - rect.top) / rect.height),
      );
      onChangeSVRef.current(s, v);
    }, disabled);

  return (
    <div
      ref={ref}
      className={cn(
        "colorPicker_saturation",
        "relative [--_radius:var(--radius-input)] rounded-slot cursor-crosshair select-none overflow-visible",
        areaClass,
      )}
      style={{
        background: `hsl(${hue}, 100%, 50%)`,
        touchAction: "none",
        paddingBottom: 7,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="absolute inset-0 rounded-slot"
        style={{ background: "linear-gradient(to right, white, transparent)" }}
      />
      <div
        className="absolute inset-0 rounded-slot"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      />
      <div
        className="absolute w-3.5 h-3.5 rounded-full border-2 border-white [--_shadow:var(--shadow-md)] shadow-size-slot pointer-events-none z-10"
        style={{
          left: `${sat * 100}%`,
          top: `${(1 - val) * 100}%`,
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
        }}
      />
    </div>
  );
}

// ── Hue Slider ───────────────────────────────────────────────
function HueSlider({
  hue,
  onChange,
  hueClass,
  disabled,
}: {
  hue: number;
  onChange: (h: number) => void;
  hueClass: string;
  disabled?: boolean;
}) {
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  const { ref, handlePointerDown, handlePointerMove, handlePointerUp } =
    useDrag((clientX, _clientY, rect) => {
      const h = Math.max(
        0,
        Math.min(360, ((clientX - rect.left) / rect.width) * 360),
      );
      onChangeRef.current(h);
    }, disabled);

  return (
    <div
      ref={ref}
      className={cn(
        "colorPicker_hue",
        "relative rounded-full cursor-pointer select-none",
        hueClass,
      )}
      style={{
        background:
          "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
        touchAction: "none",
        paddingTop: 7,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="absolute w-3.5 h-3.5 rounded-full border-2 border-white [--_shadow:var(--shadow-md)] shadow-size-slot pointer-events-none z-10"
        style={{
          left: `${(hue / 360) * 100}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          willChange: "left",
        }}
      />
    </div>
  );
}

// ── ColorPicker ──────────────────────────────────────────────
const ColorPicker = React.memo<ColorPickerProps>(
  ({
    value,
    defaultValue = "#3b82f6",
    onChange,
    swatches,
    size = "md",
    color = "primary",
    disabled = false,
    label,
    className,
    classNames,
  }) => {
    const normalizedValue =
      value !== undefined ? normalizeHex(value) : undefined;
    const [currentValue, setCurrentValue] = useControllable({
      value: normalizedValue,
      defaultValue: normalizeHex(defaultValue),
      onChange,
    });

    const initHsv = React.useMemo(
      () => hexToHsv(normalizeHex(defaultValue)),
      [],
    );
    const [hue, setHue] = React.useState(initHsv[0]);
    const [liveSat, setLiveSat] = React.useState(initHsv[1]);
    const [liveVal, setLiveVal] = React.useState(initHsv[2]);

    // Sync HSV from external value changes (typing, swatches, controlled)
    const prevValueRef = React.useRef(currentValue);
    React.useEffect(() => {
      if (currentValue !== prevValueRef.current) {
        prevValueRef.current = currentValue;
        const [h2, s2, v2] = hexToHsv(currentValue!);
        if (s2 > 0.01 || v2 > 0.01) setHue(h2);
        setLiveSat(s2);
        setLiveVal(v2);
      }
    }, [currentValue]);

    const [inputText, setInputText] = React.useState(currentValue!);
    React.useEffect(() => setInputText(currentValue!), [currentValue]);

    const handleSVChange = React.useCallback(
      (ns: number, nv: number) => {
        setLiveSat(ns);
        setLiveVal(nv);
        const hex = normalizeHex(hsvToHex(hue, ns, nv));
        prevValueRef.current = hex;
        setCurrentValue(hex);
      },
      [hue, setCurrentValue],
    );

    const handleHueChange = React.useCallback(
      (nh: number) => {
        setHue(nh);
        const hex = normalizeHex(hsvToHex(nh, liveSat, liveVal));
        prevValueRef.current = hex;
        setCurrentValue(hex);
      },
      [liveSat, liveVal, setCurrentValue],
    );

    const updateFromHex = React.useCallback(
      (hex: string) => {
        const normalized = normalizeHex(hex);
        const [h2, s2, v2] = hexToHsv(normalized);
        if (s2 > 0.01 || v2 > 0.01) setHue(h2);
        setLiveSat(s2);
        setLiveVal(v2);
        setCurrentValue(normalized);
      },
      [setCurrentValue],
    );

    const handleInputBlur = () => {
      if (isValidHex(inputText) || isValidHex(`#${inputText}`)) {
        updateFromHex(inputText.startsWith("#") ? inputText : `#${inputText}`);
      } else {
        setInputText(currentValue);
      }
    };

    const sizes = sizeMap[size];

    return (
      <div
        data-slot="root"
        className={cn(
          "colorPicker_root",
          "inline-flex flex-col gap-3",
          colorVars[color],
          disabled && "opacity-50 pointer-events-none",
          classNames?.root,
          className,
        )}
      >
        {label && (
          <span className="text-sm font-medium text-text-primary">{label}</span>
        )}

        <SaturationArea
          hue={hue}
          sat={liveSat}
          val={liveVal}
          onChangeSV={handleSVChange}
          areaClass={cn(sizes.area, classNames?.saturation)}
          disabled={disabled}
        />

        <HueSlider
          hue={hue}
          onChange={handleHueChange}
          hueClass={cn(sizes.hue, classNames?.hueSlider)}
          disabled={disabled}
        />

        {/* Input + preview */}
        <div className="flex items-center gap-2">
          <div
            data-slot="preview"
            className={cn(
              "colorPicker_preview",
              "w-8 h-8 [--_radius:var(--radius-input)] rounded-slot border border-border shrink-0",
              classNames?.preview,
            )}
            style={{ backgroundColor: currentValue }}
          />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onBlur={handleInputBlur}
            onKeyDown={(e) => e.key === "Enter" && handleInputBlur()}
            className={cn(
              "colorPicker_input",
              "flex-1 min-w-0 bg-transparent border border-border [--_radius:var(--radius-input)] rounded-slot px-2 py-1 text-sm text-text-primary outline-none hover:border-slot-50 focus:border-slot font-mono",
              classNames?.input,
            )}
            disabled={disabled}
          />
        </div>

        {/* Swatches */}
        {swatches && swatches.length > 0 && (
          <div
            data-slot="swatches"
            className={cn(
              "colorPicker_swatches",
              "flex flex-wrap gap-1",
              classNames?.swatches,
            )}
          >
            {swatches.map((swatch) => (
              <button
                key={swatch}
                type="button"
                onClick={() => updateFromHex(swatch)}
                className={cn(
                  "colorPicker_swatch",
                  sizes.swatch,
                  "[--_radius:var(--radius-input)] rounded-slot border border-border cursor-pointer transition-transform hover:scale-110",
                  currentValue === normalizeHex(swatch) &&
                    "ring-2 ring-slot ring-offset-1 ring-offset-background",
                  classNames?.swatch,
                )}
                style={{ backgroundColor: swatch }}
                aria-label={`Select color ${swatch}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

ColorPicker.displayName = "ColorPicker";

// ── ColorInput ───────────────────────────────────────────────
const ColorInput = React.memo<ColorInputProps>(
  ({
    value,
    defaultValue = "#3b82f6",
    onChange,
    swatches,
    size = "md",
    color = "primary",
    disabled = false,
    label,
    fullWidth = true,
    className,
    classNames,
  }) => {
    const normalizedValue =
      value !== undefined ? normalizeHex(value) : undefined;
    const [currentValue, setCurrentValue] = useControllable({
      value: normalizedValue,
      defaultValue: normalizeHex(defaultValue),
      onChange,
    });

    const update = (hex: string) => {
      setCurrentValue(normalizeHex(hex));
    };

    return (
      <div
        data-slot="root"
        className={cn(
          "colorInput_root",
          "flex flex-col gap-1.5",
          fullWidth ? "w-full" : "inline-flex",
          className,
        )}
      >
        {label && (
          <span className="text-sm font-medium text-text-primary">{label}</span>
        )}

        <Popover>
          <PopoverTrigger asChild>
            <div
              className={cn(
                inputVariants({ size }),
                colorVars[color],
                disabled && "opacity-50 cursor-not-allowed",
                fullWidth && "w-full",
              )}
            >
              <div
                className="w-5 h-5 rounded border border-border shrink-0"
                style={{ backgroundColor: currentValue }}
              />
              <span className="flex-1 truncate text-text-primary font-mono">
                {currentValue}
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-3" align="start">
            <ColorPicker
              value={currentValue}
              onChange={update}
              swatches={swatches}
              size={size}
              disabled={disabled}
              classNames={classNames}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);

ColorInput.displayName = "ColorInput";

export type * from "./types";
export { ColorPicker, ColorInput };
export default ColorPicker;
