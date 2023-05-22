import Button from './Button'

//List of  Buttons
const list = ['All', 'Gaming', 'Work', 'Sports', 'cricket', 'Chores', 'Other']
const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  )
}

export default ButtonList
