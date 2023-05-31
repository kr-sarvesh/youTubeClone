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

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <>
            <Comment data={comment} key={index} />
            <div className='pl-5 border border-l-black ml-5'>
              <CommentList comments={comment.replies} />
            </div>
          </>
        )
      })}
    </div>
  )
}

const Comment = ({ data }) => {
  const { name, text, replies } = data
  return (
    <div
      className='flex shadow-sm bg-gray-100
    p-2 rounded-lg my-4 mx-5
    '
    >
      <img
        className='w-8 h-8 rounded-full ml-5'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        alt='no-profile'
      />
      <div className='px-4'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

function CommentsContainer() {
  return (
    <div>
      <h1 className='text-xl py-4 px-5 font-bold'>Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
