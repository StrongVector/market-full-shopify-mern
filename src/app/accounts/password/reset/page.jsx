import React from 'react'
import ResetPassword from '../../../../../Components/login/resetPassword/ResetPassword'
import ResetPromlem from '../../../../../Components/login/resetPassword/ResetPromlem'
import SubTitle from '../../../../../Components/Utils/SubTitle'
const ResetPasswordPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 p-3 mt-2'>
        <SubTitle title = {'إعادة تعيين كلمة المرور'}/>

        <ResetPassword/>
        <ResetPromlem/>
    
    </div>
  )
}

export default ResetPasswordPage