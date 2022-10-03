import { UsersService } from './UsersService';
import { DataGeneratorService } from './DataGeneratorService';
import { BreakDataService } from './BreakDataService';

const generatedData = new DataGeneratorService().generateUsersData();
const brokenUsers = BreakDataService.breakData(generatedData);
export const usersService = new UsersService(brokenUsers);
