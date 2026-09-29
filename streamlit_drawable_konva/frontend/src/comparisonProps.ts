export type ComparisonDataShape = {
  img1URL: string;
  img2URL: string;
  label1: string;
  label2: string;
  width: number;
  height: number;
  startingPosition: number;
  showLabels: boolean;
};

export function normalizeComparisonProps(
  data: Partial<ComparisonDataShape> | null | undefined,
): ComparisonDataShape {
  const starting = data?.startingPosition ?? 50;
  return {
    img1URL: data?.img1URL ?? "",
    img2URL: data?.img2URL ?? "",
    label1: data?.label1 ?? "Before",
    label2: data?.label2 ?? "After",
    width: data?.width ?? 700,
    height: data?.height ?? 400,
    startingPosition: Math.min(100, Math.max(0, starting)),
    showLabels: data?.showLabels ?? true,
  };
}
