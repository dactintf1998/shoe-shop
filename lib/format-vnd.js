export function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatVnd(value) {
  return `${new Intl.NumberFormat("vi-VN").format(value)}đ`;
}

export function formatUsd(value) {
  return formatCurrency(value * 0.038, "en-US", "USD");
}

export function formatEur(value) {
  return formatCurrency(value * 0.033, "de-DE", "EUR");
}
