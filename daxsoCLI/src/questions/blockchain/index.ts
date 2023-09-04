import inquirer from "inquirer";
import { responseData, handleResponseChange } from "../../store";
import { logger } from "../../utils/logger";
import sendAnalytics from "../../utils/analytics";


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

    await sendAnalytics( 'Blockchain Type', blockchain, responseData.sessionID as string );
    
};


export const newSmartContractERC = async (): Promise<void> => {
    const { newSmartContractERC } = await inquirer.prompt<{ newSmartContractERC: string }>( {
        name: 'newSmartContractERC',
        type: 'list',
        message: 'What type of smart contract will you be using?',
        choices: ["ERC20", "ERC721"],
        default: 'ERC20',
    } );

    //const contractLanguageString = smartContractERC.toString().replace( / /g, '' ).replace( /,/g, '/' );
    //triggerAnalytics( 'smartContractERC', contractLanguageString );

    responseData.newSmartContractERC = newSmartContractERC;
    await handleResponseChange( responseData );

    await sendAnalytics( 'Smart Contract Type', newSmartContractERC, responseData.sessionID as string );

};
