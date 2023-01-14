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
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
    </S.FormContainer>
  )
}
