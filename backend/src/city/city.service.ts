import { Injectable, NotFoundException } from '@nestjs/common';
import { CityEntity } from './entity/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) {}

  async create(city: CreateCityDto) {
    return this.cityRepository.save(city);
  }

  findAll() {
    return this.cityRepository.find();
  }

  async findOne(id: number) {
    const city = await this.cityRepository.findOne({ where: { id } });
    if (!city) {
      throw new NotFoundException('City not found');
    }
    return city;
  }

  async update(id: number, dto: UpdateCityDto) {
    const city = await this.cityRepository.findOne({ where: { id } });
    if (!city) throw new NotFoundException('City not found');

    return this.cityRepository.save({ ...city, ...dto });
  }

  async delete(id: number) {
    const result = await this.cityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('City not found');
    }
    return { deleted: true };
  }
}
