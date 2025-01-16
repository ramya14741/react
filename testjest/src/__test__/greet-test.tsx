import { render,screen } from "@testing-library/react"
import Greet from '../components/greet/Greet'

describe('Greet',()=>{
    fit('greet renders correctly',()=>{
        render(<Greet />);
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
        //to ignore the case 
        const textElementignore = screen.getByText(/hello/i)
        expect(textElementignore).toBeInTheDocument()
    })
    
    //greet should render the text hello and if  a name is passed into the test component it should render the
    //hello followed by same 
    
    fit('greet renders correctly two',()=>{ // skip - jest skip executing the test 
    render(<Greet/>)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
    })
    
    it('Nested',()=>{
        test('greet renders with the name',()=>{//test.only - jest will pick up only that test case to run 
            render(<Greet name = 'aadvik'/>)
            const textElement = screen.getByText('Hello aadvik')
            expect(textElement).toBeInTheDocument()
        })
    })
    
})
