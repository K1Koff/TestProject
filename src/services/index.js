import { UsersService } from './UsersService';
import { DataGeneratorService } from './DataGeneratorService';
import { BreakDataService } from './BreakDataService';
import { FixDataService } from './FixDataService';

const generatedData = new DataGeneratorService().generateUsersData();
const brokenUsers = new BreakDataService().breakData(generatedData);
const fixedUsers = new FixDataService().fixData(brokenUsers);
export const usersService = new UsersService(generatedData);
