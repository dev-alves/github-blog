import { Input } from './styles'

interface InputTextProps {
  placeholder: string
}

export function InputText({ placeholder }: InputTextProps) {
  return <Input placeholder={placeholder} />
}
