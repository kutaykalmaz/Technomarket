using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.DTOs;
using technomarket.data;

namespace technomarket.application.SubCategories
{
    public class SubCategoryDetails
    {
        public class Query : IRequest<Result<SubCategoryWithProductDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<SubCategoryWithProductDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<SubCategoryWithProductDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var subCategory = await _context.SubCategories
                    .ProjectTo<SubCategoryWithProductDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                if (subCategory == null) return null;

                return Result<SubCategoryWithProductDto>.Success(subCategory);


            }
        }


    }
}