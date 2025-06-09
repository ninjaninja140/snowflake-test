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

const original = '14/11/2022 04:54 PM';

const [datePart, timePart, ampm] = original.split(/[\s:]+/);

const [day, month, year, hourRaw, minute] = [
	datePart.split('/')[0],
	datePart.split('/')[1],
	datePart.split('/')[2],
	timePart,
	timePart,
];

let hour = parseInt(hourRaw, 10);
if (ampm === 'PM' && hour < 12) hour += 12;
if (ampm === 'AM' && hour === 12) hour = 0;

const origin = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), hour, parseInt(minute, 10));
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
