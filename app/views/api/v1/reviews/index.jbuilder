json.ignore_nil?
@reviews = Review.all.size

def star(star)
  return Review.where(business: @business, rating: star).size.to_f
end

json.overall_rating @overall_rating
json.reviews @reviews_count
json.one_star (star(1) / @reviews * 100).round(0)
json.two_star (star(2) / @reviews * 100).round(0)
json.three_star (star(3) / @reviews * 100).round(0)
json.four_star (star(4) / @reviews * 100).round(0)
json.five_star (star(5) / @reviews * 100).round(0)

# json.all_reviews(@reviews) do |review|

# end
