using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.DTOs;
using technomarket.data;
using technomarket.entity;

namespace technomarket.application.SubCategories
{
    public class SubCategoryList
    {
        public class Query : IRequest<Result<List<SubCategoryWithProductDto>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<SubCategoryWithProductDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<SubCategoryWithProductDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var subCategories = await _context.SubCategories
                    .ProjectTo<SubCategoryWithProductDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();

                return Result<List<SubCategoryWithProductDto>>.Success(subCategories);
            }
        }
    }
}