import React from 'react'
import { TOKEN } from "../constants/ConstantVariables";
import { Redirect, Route } from 'react-router-dom'

const RequireAuth =({ component: Component, ...rest })=>{

const isLoggedIn = localStorage.getItem(TOKEN)

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
export default RequireAuth