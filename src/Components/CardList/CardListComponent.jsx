import './CardListStyles.css'
import CardComponent from '../Card/CardComponent'
const CardListComponent = (props) => {
  return (
    <div className  = 'card-list'>
      {props.students.map((student) => (
        <CardComponent key={student.id} student = {student}/>
      ))}
    </div>
  )
}

export default CardListComponent
