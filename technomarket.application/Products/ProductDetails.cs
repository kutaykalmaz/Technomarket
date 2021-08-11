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

namespace technomarket.application.Products
{
    public class ProductDetails
    {
        public class Query : IRequest<Result<ProductDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<ProductDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<ProductDto>> Handle(Query request, CancellationToken cancellationToken)
            {
            
                var product = await _context.Products
                                    .ProjectTo<ProductDto>(_mapper.ConfigurationProvider)
                                    .FirstOrDefaultAsync(x => x.Id == request.Id);
                return Result<ProductDto>.Success(product);
                
            }
        }
    }
}