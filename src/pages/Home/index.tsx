import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <button>
          <Play size={24} /> Começar
        </button>
      </form>
    </S.HomeContainer>
  )
}
