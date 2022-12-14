import * as React from "react"
import styled from "styled-components/macro"

const WrapInput = styled.div`
  width: 100%;
  position: relative;
`

const Input = styled.input`
  width: 400px;
  padding: 12px 40px 12px 10px;
  display: inline-block;
  border: 1.5px solid #fff;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: "#FFFFFF";
  font-size: 14px;
  height: 43px;
  margin-top: 5px;
  &:focus {
    outline: none !important;
    border: 1px solid #719ece;
    box-shadow: 0 0 5px #719ece;
  }
`

const Label = styled.label`
  font-size: 14px;
`

const WrapEye = styled.div`
  position: absolute;
  top: 1px;
  right: 0px;
  height: 48px;
  width: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form: React.CSSProperties = { marginTop: 15 }

interface TextFieldProps {
  label: string
  placeholder: string
  isPassword?: boolean
}

interface TextFieldState {
  password: string
  showPassword: boolean
}

export function TextField(props: TextFieldProps) {
  const { label, placeholder, isPassword } = props

  const [state, setState] = React.useState<TextFieldState>({
    password: "",
    showPassword: false,
  })

  const onTouchEye = () => setState((arg) => ({ ...arg, showPassword: !state.showPassword }))

  return (
    <form style={Form}>
      <Label htmlFor={label}>{label}</Label>
      <br />
      <WrapInput>
        <Input
          style={{ padding: isPassword ? "12px 40px 12px 10px" : "12px 10px" }}
          type={state.showPassword ? "text" : "password"}
          id={label}
          name={label}
          placeholder={placeholder}
        />
        {isPassword && (
          <WrapEye onClick={onTouchEye}>
            <i className={state.showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} />
          </WrapEye>
        )}
      </WrapInput>
    </form>
  )
}
