import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {preview} from '../assets'
import {getRandomPrompt} from '../utils';
import {Form, Loader} from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false)

  const generateImage = () =>{

  }
  
  const handleSubmit = () =>{

  }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value })

  }

  const handleSurpriseMe = () =>{
    const randomPrompt  = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt })
  }

  return (
    <section className='max-w-8xl mx-auto'>

    <div>
    <h1 className='font-extrabold text-black text-[33px]'>Create</h1>
    <p className='mt-2 text-[#666e75] text-[15px] max-w-[500px]'>Create imaginative and visually stunning images through DALL-E-AI and share them with the community</p>
    </div>

    <form className='mt-11 max-w-4xl' onSubmit={handleSubmit}>
    <div className='flex flex-col gap-8'>
      <Form
      labelName = 'Your Name'
      type='text'
      name='name'
      placeholder='Aryan Kadyan'
      value={form.name}
      handleChange={handleChange}
      />
      <Form
      labelName ='Prompt'
      type='text'
      name='prompt'
      placeholder='an armchair in the shape of an avocado'
      value={form.name}
      handleChange={handleChange}
      isSurpriseMe
      handleSurpriseMe={handleSurpriseMe}
      />
<div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-blue-400 w-64 p-4 h-64 flex justify-center items-center'>
  {form.photo ? (
    <img
    src={form.photo}
    alt={form.prompt}
    className='w-full h-full object-contain'
    />
  ): (
    <img 
    src={preview}
    alt="preview"
    className='w-9/12 h-9/12 object-contain opacity-50'
    />
  )}

  {generatingImg && (
    <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]
    rounded-lg'>
      <Loader/>
</div>
  )}
  </div>
    </div>
    <div className='mt-5 flex gap-6'>
      <button
        type="button"
        onClick={generateImage}
        className='text-white bg-green-600 font-medium rounded-md text-sm w-full sm:w-auto px-20 py-2.5 text-center' 
        >
          {generatingImg ? 'Generating...' : 'Generate'}
      </button>
    </div>
    <div className='mt-10'>
    <p className='mt-4 text-[#666e75] text-[15px]'>
      Once you have created the image you want, you can share it with others in the community
    </p>
    <button
    type='submit'
    className='mt-4 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-20 py-2.5 text-center'
    >
      {loading ? 'Sharing...' : 'Share with the community'}
    </button>
    </div>

    </form>
    </section>
  )
}

export default CreatePost
