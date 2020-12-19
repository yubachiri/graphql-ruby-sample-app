# == Schema Information
#
# Table name: identities
#
#  id         :uuid             not null, primary key
#  iss        :string           not null
#  sub        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_identities_on_user_id  (user_id)
#
require 'rails_helper'

RSpec.describe Identity, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
