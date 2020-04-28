import React from 'react'
import { LogoLUKSO } from '../LogoLUKSO'
import { LogoPOA } from '../LogoPOA'
import { LogoSokol } from '../LogoSokol'
import { LogoKovan } from '../LogoKovan'
//import { LogoDai } from '../LogoDai'
import { constants } from '../../utils/constants'

export const Logo = ({ href = null, extraClass = '', networkBranch = '' }) => {
  switch (networkBranch) {
    case constants.L14:
      return <LogoLUKSO href={href} extraClass={extraClass} />
    case constants.SOKOL:
      return <LogoSokol href={href} extraClass={extraClass} />
    case constants.KOVAN:
      return <LogoKovan href={href} extraClass={extraClass} />
    //case constants.DAI:
    //  return <LogoDai href={href} extraClass={extraClass} />
    default:
      return <LogoLUKSO href={href} extraClass={extraClass} />
  }
}
