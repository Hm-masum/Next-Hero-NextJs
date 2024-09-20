import { NextResponse } from "next/server"

const user = false
const coo = 'next-superhero'

export const middleware = (request) => {
    // if(request.nextUrl.pathname.startWith('/about')){
    //     return NextResponse.redirect(new URL('/contacts',request.url))
    // }

    // if(!user){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
    // return NextResponse.next()

    const cookies = request.cookies.get('token')
    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL('/login',request.url))
    }
   
    return NextResponse.next()
}

export const config = {
    matcher : '/categories'
    //matcher : ['/about','/services']
}