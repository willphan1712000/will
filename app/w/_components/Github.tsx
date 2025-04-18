import { $$ } from '@willphan1712000/w'
import { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const github = 'https://github.com/willphan1712000/Web-development'
const githubClone = 'git clone https://github.com/willphan1712000/Web-Development.git'
const npm = 'npm i @willphan1712000/w'

const Github = () => {
    const copybtn = useRef<HTMLSpanElement>(null)
    const npmRef = useRef<HTMLSpanElement>(null)
    const [copied, setCopy] = useState<boolean>(false)
    const [npmCopied, setNpmCopied] = useState<boolean>(false)

    useEffect(() => {
        $$(githubClone, copybtn.current).copyToClipboard().run(() => {
            setCopy(true)
            setTimeout(() => {
                setCopy(false)
            }, 1500)
        })

        $$(npm, npmRef.current).copyToClipboard().run(() => {
          setNpmCopied(true)
          setTimeout(() => {
            setNpmCopied(false)
          }, 1500)
        })
    })

  return (
    <div className='w-full flex justify-center items-center flex-col my-10'>
      <div className='flex flex-col gap-6 min-w-[50%]'>
        <div className='relative px-10 py-3 border-white border-[2px] rounded-2xl bg-[--dark-color]'>
          <span className='absolute top-[-1rem] left-[5%] bg-inherit p-1'>Github Link</span>
          <a href={github} target='_blank'>{github}</a>
        </div>
        <div className='relative px-10 py-3 border-white border-[2px] rounded-2xl bg-[--dark-color]'>
          <span className='absolute top-[-1rem] left-[5%] bg-inherit p-1'>Github Clone</span>
          <div>{githubClone}</div>
          <span ref={copybtn} className='absolute top-[-1rem] right-[5%] bg-inherit p-1 cursor-pointer flex flex-row gap-1 justify-center items-center'>{copied && <FaCheck />}Copy</span>
        </div>
        <div className='relative px-10 py-3 border-white border-[2px] rounded-2xl bg-[--dark-color]'>
          <span className='absolute top-[-1rem] left-[5%] bg-inherit p-1'>NPM</span>
          <div>{npm}</div>
          <span ref={npmRef} className='absolute top-[-1rem] right-[5%] bg-inherit p-1 cursor-pointer flex flex-row gap-1 justify-center items-center'>{npmCopied && <FaCheck />}Copy</span>
        </div>
      </div>
    </div>
  )
}

export default Github
