#!/usr/bin/env python
# coding: utf-8

# In[1]:


from sklearn.preprocessing import OneHotEncoder


# In[2]:


categories = {"cat", "dog", "fish", "cat", "dog"}


# In[4]:


encoder = OneHotEncoder(sparse_output=False)
one_hot_encoded = encoder.fit_transform([[category] for category in categories])


# In[5]:


print("One-Hot Encoded Data:")
print(one_hot_encoded)


# In[ ]:




