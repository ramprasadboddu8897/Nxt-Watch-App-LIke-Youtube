import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100vh;
  background-color: ${props => (props.isDark ? ' #424242' : '#ffffff')};
`
export const FormContainer = styled.form`
  margin-top: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 450px;
  border-radius: 8px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
  align-items: center;
  justify-content: flex-start;
  box-shadow: ${props => (props.isDark ? null : '0px 4px 16px 0px #bfbfbf')};
`
export const Logo = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 200px;
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 300px;
  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: solid ${props => (props.isDark ? '#383838' : '#e2e8f0')} 2px;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Roboto';
  outline: none;
  color: ${props => (props.isDark ? '#f9f9f9' : null)};
  background-color: ${props => (props.isDark ? 'transparent' : null)};
`
export const ShowInput = styled.input`
  color: #e2e8f0;
  padding-right: 5px;
  width: 18px;
  height: 18px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`
export const ShowLabel = styled.label`
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  margin-left: 0px;
  font-weight: 500;
`
export const LoginButton = styled.button`
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #f9f9f9;
  font-weight: 500;
  font-family: 'Roboto';
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  text-align: center;
  margin-top: 20px;
  border-radius: 8px;
`
export const ErrorText = styled.p`
  color: ${props => (props.isDark ? '#ff0000' : '#ff0b37')};
  font-family: 'Roboto';
  display: flex;
  font-weight: 400;
  align-self: flex-start;
`
