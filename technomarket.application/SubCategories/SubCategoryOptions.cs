using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.DTOs.SubCategory;
using technomarket.data;

namespace technomarket.application.SubCategories
{
    public class SubCategoryOptions
    {
        public class Query : IRequest<Result<List<SubCategoryOptionsDto>>>
        {
            
        }

        public class Handler : IRequestHandler<Query, Result<List<SubCategoryOptionsDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<SubCategoryOptionsDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var subCategories = await _context.SubCategories
                    .ProjectTo<SubCategoryOptionsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return Result<List<SubCategoryOptionsDto>>.Success(subCategories);
            }
        }
    }
}