import inquirer from "inquirer";
import { responseData, handleResponseChange } from "../../store";
import { logger } from "../../utils/logger";

export const promptBlockchain = async (): Promise<void> => {
    const { blockchain } = await inquirer.prompt<{ blockchain: string }>( {
        name: 'blockchain',
        type: 'list',
        message: 'What blockchain will you be using?',
        choices: ["Ethereum" ],
        default: 'Ethereum',
    } );

    //const contractLanguageString = blockchain.toString().replace( / /g, '' ).replace( /,/g, '/' );
    //triggerAnalytics( 'blockchain', contractLanguageString );

    if ( blockchain === 'Ethereum' ) {
        logger.success( `${blockchain}` );

    } else if ( blockchain !==  'Ethereum') {
        logger.error( `I'm sorry ${blockchain} has not been implemented.` );
    }

    responseData.blockchain = blockchain;
    await handleResponseChange( responseData );

    
    
};


export const promptSmartContractERC = async (): Promise<void> => {
    const { smartContractERC } = await inquirer.prompt<{ smartContractERC: string }>( {
        name: 'smartContractERC',
        type: 'list',
        message: 'What type of smart contract will you be using?',
        choices: ["Erc20", "Erc721", "Erc777", "Erc1155", "Erc4626"],
        default: 'Solidity',
    } );

    //const contractLanguageString = smartContractERC.toString().replace( / /g, '' ).replace( /,/g, '/' );
    //triggerAnalytics( 'smartContractERC', contractLanguageString );

    if ( smartContractERC === smartContractERC[0] ) {
        logger.success( 'You chose correctly' );

    }

    responseData.smartContractERC = smartContractERC;
    await handleResponseChange( responseData );

};
