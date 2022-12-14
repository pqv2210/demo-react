import * as React from "react"
import { Helmet } from "react-helmet-async"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import { TextField } from "app/components/TextField"
import styled from "styled-components/macro"
import { LineLogin } from "reactjs-line-login"
import * as styles from "./styles"
import "./index.css" // import for LINE Button
import { decrement, increment, selectValue, multiplicationFunc } from "reducers"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"

const Separator = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cecece;
  flex-direction: column;
  justify-content: center;
  display: flex;
`

const Button = styled.button`
  background-color: #1967d2;
  border: 0px solid #1967d2;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  height: 50px;
  padding: 14px 40px;
  width: 100%;
  margin-top: 30px;
  &:hover {
    background-color: #1450a4;
  }
`

const Title: React.CSSProperties = {
  fontSize: 22,
  marginBottom: "50px",
  alignSelf: "flex-start",
}

const Text = styled.p`
  text-align: center;
  margin: 20px 0px;
`

const Logo = styled.i`
  background-color: #1967d2;
  border: 0px solid #fff;
  color: white;
  font-size: 30px;
  padding: 8px;
  border-radius: 50px;
  cursor: pointer;
  align-self: center;
  &:hover {
    background-color: #1450a4;
  }
`

const WrapSNS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export function HomePage() {
  const dispatch = useDispatch<Dispatch<any>>()
  const state = useSelector(selectValue)

  const responseFacebook = (res: any) => {
    console.log(res)
    if (res.id) {
      alert(`Chào ${res.name}`)
    }
  }

  const onIncrement = () => dispatch(increment())

  const onDecrement = () => dispatch(decrement())

  const onMultiplication = () => dispatch(multiplicationFunc(1.5))

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div style={styles.WrapPage}>
        <div style={styles.WrapContent}>
          <b style={Title}>ログイン</b>
          <TextField label="メールアドレス" placeholder="メールアドレス" />
          <TextField label="パスワード" placeholder="パスワード" isPassword />
          <Button type="submit">ログイン</Button>
          <Separator>
            <Text>
              or <br />
              Sign in with SNS
            </Text>
            <WrapSNS>
              <FacebookLogin
                appId="5761028133920071"
                callback={responseFacebook}
                render={(props: {
                  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
                }) => <Logo onClick={props.onClick} className="fa-brands fa-facebook" />}
              />
              <LineLogin
                clientID="1656556555"
                clientSecret="70ad8766e2a03379ce7463285841af6d"
                state="b41c8fd15b895f0fc28bf3b9d7da89054d931e7s"
                nonce="d78a51235f6ee189e831q9c68523cfa336917ada"
                redirectURI="http://localhost:3000/callback"
                scope="profile openid email"
                setPayload={(res) => console.log(res)}
                setIdToken={(res) => console.log(res)}
              />
            </WrapSNS>
          </Separator>
          <p>{state.toString()}</p>
          <button onClick={onIncrement}>Increment 1</button>
          <button onClick={onDecrement}>Decrement 1</button>
          <button onClick={onMultiplication}>Multiplication 1.5</button>
        </div>
      </div>
    </>
  )
}
