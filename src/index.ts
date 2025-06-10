/**
    __/\\\\\\\\\\\\\\\___________________________________________________/\\\\\\_____________________________________________________________        
     _\///////\\\/////___________________________________________________\////\\\_____________________________________________________________       
      _______\/\\\____________________________________________/\\\\\\\\\_____\/\\\_______________________/\\\__________________________________      
       _______\/\\\___________/\\\\\\\\_____/\\\\\__/\\\\\____/\\\/////\\\____\/\\\_____/\\\\\\\\\_____/\\\\\\\\\\\_____/\\\\\\\\___/\\\\\\\\\\_     
        _______\/\\\_________/\\\/////\\\__/\\\///\\\\\///\\\_\/\\\\\\\\\\_____\/\\\____\////////\\\___\////\\\////____/\\\/////\\\_\/\\\//////__    
         _______\/\\\________/\\\\\\\\\\\__\/\\\_\//\\\__\/\\\_\/\\\//////______\/\\\______/\\\\\\\\\\_____\/\\\_______/\\\\\\\\\\\__\/\\\\\\\\\\_   
          _______\/\\\_______\//\\///////___\/\\\__\/\\\__\/\\\_\/\\\____________\/\\\_____/\\\/////\\\_____\/\\\_/\\__\//\\///////___\////////\\\_  
           _______\/\\\________\//\\\\\\\\\\_\/\\\__\/\\\__\/\\\_\/\\\__________/\\\\\\\\\_\//\\\\\\\\/\\____\//\\\\\____\//\\\\\\\\\\__/\\\\\\\\\\_ 
            _______\///__________\//////////__\///___\///___\///__\///__________\/////////___\////////\//______\/////______\//////////__\//////////__
                                                        A Project by ninjaninja140 to create useful project templates!
    
	@author ninjaninja140
	@name ts-docker-template
	
*/

import { Logger } from '@bracketed/logger';
import { DiscordSnowflake, Snowflake, TwitterSnowflake } from '@sapphire/snowflake';

const Console = new Logger({ prefix: 'Application' });

const origin = new Date('04/04/2008');
const discordEpoch = new Date(Number(DiscordSnowflake.epoch));
const twitterEpoch = new Date(Number(TwitterSnowflake.epoch));

const customSnowflake = new Snowflake(origin);
const customId = customSnowflake.generate();

Console.info('Custom Snowflake -----');
Console.info('  Epoch:', origin);
Console.info('  Generated:', customId.toString());

const discordSnowflake = DiscordSnowflake.generate();

Console.info('Discord Snowflake -----');
Console.info('  Epoch:', discordEpoch);
Console.info('  Generated:', discordSnowflake.toString());

const twitterSnowflake = TwitterSnowflake.generate();

Console.info('Twitter Snowflake -----');
Console.info('  Epoch:', twitterEpoch);
Console.info('  Generated:', twitterSnowflake.toString());
