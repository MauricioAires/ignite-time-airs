import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            type="text"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Bana"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={0}
            max={60}
          />
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton type="submit">
          <Play size={24} /> Começar
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  )
}
