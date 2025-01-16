import {Application} from './Application'
import {render,screen} from "@testing-library/react"
describe('first',()=>{
    test('renderes correctly',()=>{
        render(<Application/>)
        const pageHeading = screen.getByRole('heading',{
            name:'Job Application Form'
        })
        const sectionHeading = screen.getByRole('heading',{
            name:'Section 1'
        })
        expect(sectionHeading).toBeInTheDocument();
        //to address the concerns of h1 and h2 ,
        //  react testing library provide us with the option  of 1,2 
        // specific to the heading role like below 
        const pageHeadingLevel = screen.getByRole('heading',{
            level:1,
            name:'Job Application Form'
        })
        expect(pageHeadingLevel).toBeInTheDocument();
        const sectionHeadingLevel = screen.getByRole('heading',{
            level:2,
            name:'Section 1'
        })
        expect(sectionHeadingLevel).toBeInTheDocument(); 
        expect(pageHeading).toBeInTheDocument();
        const nameElement = screen.getByRole('textbox',{
            name:'Name'
        })

        expect(nameElement).toBeInTheDocument();
        const bioElement = screen.getByRole('textbox',{
            name:'Bio'
        })
        expect(bioElement).toBeInTheDocument();
        // const nameElementByLabel = screen.getByLabelText('Name')
        // expect(nameElementByLabel).toBeInTheDocument();
        // const jobLocationElement = screen.getByRole('combobox');
        // expect(jobLocationElement).toBeInTheDocument()
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();
        const termsElementByLabel = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElementByLabel).toBeInTheDocument();
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument();
        const selectNameLabel = screen.getByLabelText("Name",{
            selector:"input"
        })
        expect(selectNameLabel).toBeInTheDocument();
        const nameElementByPlaceholder = screen.getByPlaceholderText('FullName')
         expect(nameElementByPlaceholder).toBeInTheDocument();
         const paragraphElement = screen.getByText('All Fields are mandatory')
         expect(paragraphElement).toBeInTheDocument();
         const nameElementByValue = screen.getByDisplayValue('Aadvik')
         expect(nameElementByValue).toBeInTheDocument()
         const imageElement = screen.getByAltText("a person with a laptop")
         expect(imageElement).toBeInTheDocument()
         const closeElement = screen.getByTitle('close')
         expect(closeElement).toBeInTheDocument();
         const customElement = screen.getByTestId('custom element')
         expect(customElement).toBeInTheDocument();
    });
})