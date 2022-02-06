import './CardListStyles.css'

const CardListComponent = (props) => {
  return (
    <div className  = 'card-list'>
      {props.children}
    </div>
  )
}

export default CardListComponent
