import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../../../contexts/CyclesContext'
import * as S from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        placeholder="Dê um nome para o seu projeto"
        type="text"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Ignite ReactJS"></option>
        <option value="Ignite React Native"></option>
        <option value="Ignite Node.js"></option>
        <option value="Ignite Elixir"></option>
        <option value="Veni, Vidi, Vici"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={0}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
    </S.FormContainer>
  )
}
