export function centsToUnities(value: number): string {
  return (Number(value) / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function unitiesToCents(value: number): number {
  return value * 100;
}
