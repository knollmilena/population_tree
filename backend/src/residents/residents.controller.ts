import { Controller } from '@nestjs/common';
import { ResidentService } from './residents.service';

@Controller('residents')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}
}
