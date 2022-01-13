import { autohotkeyGenerator } from "@i18n/list";

export default function BtnBuymeacoffee(props) {
    const buymeacoffee = autohotkeyGenerator.product.socialNetworks.buymeacoffee;
    const button_colour = props.btncolor ? ((props.btncolor === "secondary") ? "7db4d8" : props.btncolor) : "97bfbb";
    
    return (
        <a target="_blank" rel="noopener" href={buymeacoffee} >
            <img
                alt='Buy me a coffee'
                height={33 + "px"}
                width='auto'
                style={{
                    width:'auto'
                }}
                src={`https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=andreinariera&button_colour=${button_colour}&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00`}
            />
        </a >
    )
}
