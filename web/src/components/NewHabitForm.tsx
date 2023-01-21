import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    async function createNewHabit(event: FormEvent) {
        event.preventDefault()

        if(!title || weekDays.length=== 0) {
            return
        }

        await api.post('habits', {
            title,
            weekDays,
        })
        setTitle('')
        setWeekDays([])
        alert('Hábito criado com sucesso!')
    }


    function handleToggleWeekDay(weekDay:number) {
        if(weekDays.includes(weekDay)) {
           const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
           setWeekDays(weekDaysWithRemovedOne);
        }
        else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }
    }

    return(
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label className="font-semibold leading-tight" htmlFor="title">Qual seu compromentimento?</label>
            <input type='text' id='title' placeholder="e.g. Exercícios, dormir 8h, etc..." autoFocus
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400
                focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background
                "
                onChange={event => setTitle(event.target.value)}
                value={title}
            />

            <label className="font-semibold leading-tight mt-4" htmlFor="">Qual a recorrência?</label>

            <div className="flex flex-col gap-2 mt-3">

                {availableWeekDays.map((weekDay,index) => {
                    return (
                    <Checkbox.Root
                            key={weekDay}
                            className='flex items-center gap-2 group focus:outline-none'
                            onCheckedChange={() => handleToggleWeekDay(index)}
                            checked={weekDays.includes(index)}
                        >
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800
                            group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 
                            transition-colors duration-300
                            group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background
                            '>
                                <Checkbox.Indicator>
                                    <Check size={30} weight="bold" className='text-white'/>
                                </Checkbox.Indicator>
                            </div>
                            <span className=' text-white leading-tight'>
                                {weekDay}
                            </span>
                    </Checkbox.Root>
                    )
                })}

            </div>
            <button type='submit' className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold 
            bg-green-600 justify-center hover:bg-green-500 transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background">
                <Check size={20} weight='bold'></Check>
                Confirmar
            </button>
        </form>
    )
}