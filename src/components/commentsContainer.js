const commentData = [
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    replies: [],
  },
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    replies: [
      {
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        replies: [
          {
            name: 'John Doe',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            replies: [],
          },
        ],
      },
      {
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        replies: [
          {
            name: 'John Doe',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    replies: [],
  },
  {
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    replies: [],
  },
]

const Comment = ({ data }) => {
  const { name, text, replies } = data
  return (
    <div>
      <img
        src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
        alt='no-profile'
      />
    </div>
  )
}

function CommentsContainer() {
  return (
    <div>
      <h1 className='text-xl py-4 px-5 font-bold'>Comments:</h1>
      <Comment data={commentData[0]} />
    </div>
  )
}

export default CommentsContainer
