import { UsersService } from './UsersService';
import { DataGeneratorService } from './DataGeneratorService';
import { BreakDataService } from './BreakDataService';
import { FixDataService } from './FixDataService';

const generatedData = new DataGeneratorService().generateUsersData();
const brokenUsersJson = new BreakDataService().breakData(generatedData);
const fixedUsers = new FixDataService().fixData(brokenUsersJson);
export const usersService = new UsersService(fixedUsers);
