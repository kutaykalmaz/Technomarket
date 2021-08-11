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

namespace technomarket.application.Categories
{
    public class CategoryDetails
    {
        public class Query : IRequest<Result<CategoryWithProductDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<CategoryWithProductDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<CategoryWithProductDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var category = await _context.Categories
                    .ProjectTo<CategoryWithProductDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);
                
                return Result<CategoryWithProductDto>.Success(category);
            }
        }
    }
}