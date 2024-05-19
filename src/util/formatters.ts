export function formatCPF(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

export function formatCEP(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,3})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
}

export function formatPhone(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{7})/, '($1) $2')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}
