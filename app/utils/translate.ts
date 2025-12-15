export default function (key: string, fallback: string): string {
  const { t, te } = useI18n()
  return te(key) ? t(key) : fallback
}
