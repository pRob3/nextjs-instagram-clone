export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='h-16 rounded-full border p-[2px]'
        src='https://media.licdn.com/dms/image/C5603AQGdK493X-2G0Q/profile-displayphoto-shrink_800_800/0/1629999642500?e=2147483647&v=beta&t=Xm3UfIawdbGeWSGt-ngqmKWOLrTufjlSFSO2aIgVUlk'
        alt='user-image'
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>Dennis</h2>
        <h3 className='text-sm text-grey-400'>Welcome to Instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  );
}
