﻿using AspReactTestApp.Data.DataAccess.Abstract;
using AspReactTestApp.Dto;
using AspReactTestApp.DTOs;
using AspReactTestApp.Entities.Concrete.CarRelated;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AspReactTestApp.Services.FeatureService
{
    public class FeatureService : IFeatureService
    {
        private readonly IFeatureRepository _featureRepository;
        private readonly IMapper _mapper;

        public FeatureService(IFeatureRepository featureRepository, IMapper mapper)
        {
            _featureRepository = featureRepository;
            _mapper = mapper;
        }

        public async Task<ResponseDto> AddFeature(Feature feature)
        {
            ResponseDto responseDto = new();
            try
            {
                await _featureRepository.Add(feature);
                responseDto.IsSuccessfull = true;
                responseDto.Message = "Feature Added Successfully!";
            }
            catch (Exception ex)
            {
                responseDto.Message = ex.Message;
            }
            return responseDto;
        }

        public async Task<ResponseDto> RemoveFeatureById(int id)
        {
            ResponseDto responseDto = new();
            try
            {
                var feature = await _featureRepository.Get(f => f.Id == id);
                if (feature != null)
                {
                    await _featureRepository.Delete(feature);
                    responseDto.Message = "Feature Not Found!";
                    return responseDto;
                }
                responseDto.IsSuccessfull = true;
                responseDto.Message = "Feature Removed Successfully!";
            }
            catch (Exception ex)
            {
                responseDto.Message = ex.Message;
            }
            return responseDto;
        }

        public async Task<List<GenericEntityDto>> GetAllFeatures(string language)
        {
            try
            {
                var features = await _featureRepository.GetList(
                    filter: c => c.FeatureLocales.Any(fl => fl.Language.DisplayName == language),
                    orderBy: null,
                    include: source => source.Include(f => f.FeatureLocales));

                List<GenericEntityDto> featureDtos = _mapper.Map<List<GenericEntityDto>>(features);
                return featureDtos;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
