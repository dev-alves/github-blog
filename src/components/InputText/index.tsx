import { Input } from './styles'
import { ChangeEvent } from 'react'

interface InputTextProps {
  onChange: (value: string) => void
  placeholder: string
}

export function InputText({ placeholder, onChange }: InputTextProps) {
  return (
    <Input
      onChange={(value: ChangeEvent<HTMLInputElement>) => {
        onChange(value.target.value)
      }}
      placeholder={placeholder}
    />
  )
}
