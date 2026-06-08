const Languageoption = (props) => {
    return(
        <select className="text-[#5a5a4b]" onChange={props.onChange}>
           <option className="text-[#5a5a4b]">LANGUAGE</option>
            <option value={'en'} className="text-[#5a5a4b]">English</option>
            <option value={'om'} className="text-[#424237]">Afaan Oromo</option>
            <option value={'am'} className="text-[#3f3f3a]">Amharic</option>
            
        </select>
    )
}

export default Languageoption;