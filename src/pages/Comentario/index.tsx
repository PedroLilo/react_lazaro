import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'


export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          autor={item.autor}
          titulo={item.titulo}
          tipo={item.tipo}
          lancamento={item.lancamento}
          img={item.img}
        />
      ))}
    </S.Section>
  )
}