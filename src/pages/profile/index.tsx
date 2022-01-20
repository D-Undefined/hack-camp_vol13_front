export default function Profile() {
  return (
    <div className="p-10">
      <div className="pt-5 pl-5 pr-5 border">
        <div className="flex">
          <div className="mr-10">
            <img className="rounded-full" src="https://placehold.jp/200x200.png" alt=""/>
          </div>
          <div>
            <h1 className="font-bold mb-1 text-2xl">user_name</h1>
            <p>test</p>
            <p>test1</p>
            <a href="">link</a>
          </div>
        </div>
        <div className="h-14 flex justify-between mt-2">
          <div className="items-center flex">
            <a className="mr-5" href="">discussion</a>
            <a href="">test</a>
          </div>
          <div className="items-center flex">
            <a className="bg-violet-200 rounded-full pt-1 pb-1 pr-5 pl-5 inline-flex" href="">edit profile</a>
          </div>
        </div>
      </div>
      <div>
        medal
      </div>
    </div>
  )
}
